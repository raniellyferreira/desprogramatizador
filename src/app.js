import * as offline from 'offline-plugin/runtime';
import { translator } from './js/translator';
import './app.styl';
import '../node_modules/ionicons/dist/ionicons.js';

translator(); 
offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});
