const urlToNameTable = {
  'https://creativecommons.org/publicdomain/zero/1.0/legalcode': 'CC0',
  'https://creativecommons.org/licenses/by/4.0/legalcode': 'CC BY',
  'https://creativecommons.org/licenses/by-sa/4.0/legalcode': 'CC BY-SA',
  'https://creativecommons.org/licenses/by-nc/4.0/legalcode': 'CC BY-NC',
  'https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode': 'CC BY-NC-SA',
  'https://creativecommons.org/licenses/by-nd/4.0/legalcode': 'CC BY-ND',
  'https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode': 'CC BY-NC-ND'
};

const properties = [
  'attributionRequired',
  'remix',
  'commersialUse',
  'freeCulturalWorks',
  'redistribution'
];

const infoTable = {
  'CC0':         [false,  true,  true,  true,  null],
  'CC BY':       [ true,  true,  true,  true,  null],
  'CC BY-SA':    [ true,  true,  true,  true,  null],
  'CC BY-NC':    [ true,  true, false, false,  null],
  'CC BY-NC-SA': [ true,  true, false, false,  null],
  'CC BY-ND':    [ true, false,  true, false,  null],
  'CC BY-NC-ND': [ true, false, false, false,  null]
};

const makeInfo = (name) => {
  if (infoTable[name] === undefined) {
    return null;
  }
  const info = {name: name};
  for (let i = 0, il = properties.length; i < il; i++) {
    const propertyName = properties[i];
    const value = infoTable[name][i];
    info[propertyName] = value;
  }
  return Object.freeze(info);
};

const getByCertificateURL = (url) => {
  return getByLicenseName(urlToNameTable[url]);
};

const getByLicenseName = (name) => {
  return makeInfo(name);
};

const licenseInfo = {
  getByCertificateURL: getByCertificateURL,
  getByLicenseName: getByLicenseName
};

export default licenseInfo;
