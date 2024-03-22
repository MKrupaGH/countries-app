export interface Country {
  flags: Flags;
  name: Name;
  cca2: string;
  capital: string[];
  region: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: Native;
}

interface Native {
  [key: string]: NativeName;
}

interface NativeName {
  official: string;
  common: string;
}
