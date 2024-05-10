export interface Planet {
  id: number | null;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[] | null;
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface PlanetsList {
  count: number;
  next: string;
  previous: string | null;
  results: Planet[];
}
