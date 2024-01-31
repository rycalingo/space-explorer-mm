
export interface Dest {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	description: string;
	distance: string;
	travel: string;
}

export interface Crew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface Tech {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export interface Page {
  destinations?: Dest[]
  crew?: Crew[]
  technology?: Tech[]
}