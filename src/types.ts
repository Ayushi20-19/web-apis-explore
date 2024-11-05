export interface ApiLogo {
  url: string;
  backgroundColor: string;
}

export interface ApiContact {
  name: string;
  email: string;
  url: string;
  twitter?: string;
}

export interface ApiLicense {
  name: string;
  url: string;
}

export interface ApiOrigin {
  contentType: string;
  url: string;
  converter: {
    url: string;
    version: string;
  };
}

export interface ApiInfo {
  version: string;
  release: string;
  title: string;
  description: string;
  "x-logo": ApiLogo;
  termsOfService: string;
  contact: ApiContact;
  license: ApiLicense;
  providerName: string;
  serviceName: string;
  origin: ApiOrigin[];
  apiClientRegistrationUrl: string;
  categories: string[];
  preferred: boolean;
  swaggerUrl: string;
  externalDocsDescription: string;
  externalDocsUrl: string;
  added: string;
  updated: string;
  openapiVer: string;
  link: string;
}

export interface ApiData {
  info: ApiInfo;
  swaggerUrl: string;
  swaggerYamlUrl: string;
}
