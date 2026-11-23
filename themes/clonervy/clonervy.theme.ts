// The clonervy theme. `astryx experimental theme editor` wrote this file once and never changes it again.
// The checked settings live in clonervy.settings.json and the generated clonervy.settings.ts;
// change them with `astryx experimental theme editor set clonervy ...`. Add your own changes below: they win over the settings.
import {defineTheme} from '@astryxdesign/core/theme';
import {clonervySettings} from './clonervy.settings';

export const clonervyTheme = defineTheme({
  extends: clonervySettings,
  name: 'clonervy',
});
