# license-info-js

`license-info-js` is a JavaScript library that allows JavaScript applications to quickly know
what a license allows.

Many contents are under a certain license. The license certifications are stated as natural
language and are not machine readable. It is hard for applications to know what a content
allows and disallows.

For example it can be a problem in this scenario: If a 3D asset file that is under a license
that doesn't allow remix work is uploaded to a JavaScript 3D editor the editor shows the
3D asset but should refuse to edit it.

`license-info-js` resolves the problem by providing machine readable info from a license name
or a license certificate URL.

## Example

```javascript
import licenseInfo from 'path_to_lib/license-info.js';

const info = licenseInfo.getByCertificateURL(licenseCertificateURL);
if (info.remix) {
  edit();
}
```

## API

### `getByCertificateURL(certificateURL)`

### `getByLicenseName(licenseName)`

### Info properties

* `attributionRequired`:
* `remix`:
* `commersialUse`:
* `freeCulturalWorks`:
* `redistribution`:

## Supported license list

|Name|Attribution required|Remix culture|Commersial use|Free cultural works|redistribution|
|----|:----:|:----:|:----:|:----:|:----:|
|[CC0](https://creativecommons.org/publicdomain/zero/1.0/)|No 🆗|Yes 🆗|Yes 🆗|Yes 🆗| |
|[CC BY](https://creativecommons.org/licenses/by/4.0/)|Yes ⛔|Yes 🆗|Yes 🆗|Yes 🆗| |
|[CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/)|Yes ⛔|Yes 🆗|Yes 🆗|Yes 🆗| |
|[CC BY-NC](https://creativecommons.org/licenses/by-nc/4.0/)|Yes ⛔|Yes 🆗|No ⛔|No ⛔| |
|[CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)|Yes ⛔|Yes 🆗|No ⛔|No ⛔| |
|[CC BY-ND](https://creativecommons.org/licenses/by-nd/4.0/)|Yes ⛔|No ⛔|Yes 🆗|No ⛔| |
|[CC BY-NC-ND](https://creativecommons.org/licenses/by-nc-nd/4.0/)|Yes ⛔|No ⛔|No ⛔|No ⛔| |

## License list unsupported yet

|Name|Attribution required|Remix culture|Commersial use|Free cultural works|redistribution|
|----|:----:|:----:|:----:|:----:|:----:|
|[Sketchfab Standard](https://sketchfab.com/licenses)| | | | | |
|[Sketchfab Editorial](https://sketchfab.com/licenses)| | | | | |
|[Turbo Squid 3D Model license](https://blog.turbosquid.com/turbosquid-3d-model-license/)| | | | | |
|[UVL](https://uv-license.com)| | | | | |
|[VN3](https://www.vn3.org)| | | | | |
