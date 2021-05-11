export declare type Player = {
  id?: string; // uid
  played: string; // song's id
  playlist: {
    id?: number;
    name: string;
  };
};

export declare type Queue = {
  id?: number;
  ordering: number;
};

export declare type PlayerSong = {
  id?: string;
  ordering: number;
  shuffleOrdering: number;
  name: number;
};
