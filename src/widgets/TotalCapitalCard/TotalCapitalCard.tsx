import React, {useMemo} from 'react'
import {Box, Button, CardContent, CardHeader, Paper, Typography, useTheme} from "@material-ui/core";
import {useCollectionDataWithSuspense} from "../../hooks";
import {useFirestore} from "reactfire";
import {numberFormat, trimZeroAfter} from "../../utils/regex";
import {DateTime} from 'luxon'
import {ArrowDropUp, ArrowDropDown} from '@material-ui/icons';

interface IProps {
    uid: string
}

const TotalCapitalCard: React.FC<IProps>= ({uid}) => {
    const db = useFirestore()

    const today = useMemo(() => DateTime.fromObject({hour: 0, minute: 0, second: 0}), [])
    const firstOfMonth = useMemo(() => today.set({day: 1}), [today])
    const yesterday = useMemo(() => today.set({day: today.day - 1}), [today])

    const statistics = useCollectionDataWithSuspense<{total: number}>(db.collection('total_capital_statistics').where('uid', '==', uid).orderBy('createdAt', 'desc').limit(1), {idField: 'id'})
    const previousMonth = useCollectionDataWithSuspense<{total: number}>(db.collection('total_capital_statistics').where('uid', '==', uid).where("createdAt", '<', firstOfMonth.toJSDate()).orderBy('createdAt', 'desc').limit(1), {idField: 'id'})
    const yesterdayStats = useCollectionDataWithSuspense<{total: number}>(db.collection('total_capital_statistics').where('uid', '==', uid).where("createdAt", '<=', yesterday.toJSDate()).orderBy('createdAt', 'desc').limit(1), {idField: 'id'})

    const theme = useTheme()

    if (!statistics[0]) return (
            <Paper >
                <CardHeader title={<Typography variant={'h6'}><b>Tổng vốn</b></Typography>} />
                <CardContent>
                    <Typography>Không có dữ liệu</Typography>
                </CardContent>
            </Paper>
        )

    const stats = {
        monthly: {
            isUp: !!previousMonth[0] &&  statistics[0].total >= previousMonth[0].total,
            change:  !!previousMonth[0] ? ((statistics[0].total - previousMonth[0].total) / previousMonth[0].total) *100 : 0
        },
        daily: {
            isUp: !!yesterdayStats[0] &&  statistics[0].total >= yesterdayStats[0].total,
            change:  !!yesterdayStats[0] ? ((statistics[0].total - yesterdayStats[0].total) / yesterdayStats[0].total) *100 : 0
        }
    }

    const upColor = theme.palette.success.light
    const downColor = theme.palette.error.light

    return (
        <Paper >
            <CardHeader  title={<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant={'h6'}><b>Tổng vốn</b></Typography> <Box><Button color={"primary"}>Deposit</Button><Button color={"secondary"} >Withdrawal</Button></Box>
            </Box>} />
            <CardContent>
                <Box alignItems={'center'} justifyContent={"space-between"} display={"flex"}>
                    <Typography variant={'h6'}><b>{numberFormat(statistics[0].total.toString())}đ</b></Typography>
                    <Box>
                        {!!yesterdayStats[0] && (
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <Typography variant={"caption"}>Hôm qua </Typography>
                                <Box alignItems={'center'} style={{color: stats.daily.isUp ? upColor : downColor}} display={"flex"}>
                                    <Box>{stats.daily.isUp ? <ArrowDropUp /> : <ArrowDropDown />}</Box>
                                    <Typography><b>{trimZeroAfter(stats.daily.change.toFixed(2))}</b><span>%</span></Typography>
                                </Box>
                            </Box>

                        )}
                        {!!previousMonth[0] && (
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <Typography variant={"caption"}>Tháng trước </Typography>
                                <Box alignItems={'center'} style={{color: stats.monthly.isUp ? upColor : downColor}} display={"flex"}>
                                    <Box>{stats.monthly.isUp ? <ArrowDropUp /> : <ArrowDropDown />}</Box>
                                    <Typography><b>{trimZeroAfter(stats.monthly.change.toFixed(2))}</b><span>%</span></Typography>
                                </Box>
                            </Box>

                        )}
                    </Box>
                </Box>
            </CardContent>
        </Paper>
    )
}

export default TotalCapitalCard