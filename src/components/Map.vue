<template>
	<l-map :style="'height: ' + height + 'px; z-index: 0'" :zoom="zoom" :center="coordinates">
		<l-tile-layer :url="url"></l-tile-layer>
		<l-marker :lat-lng="coordinates" ></l-marker>
	</l-map>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import {Icon} from 'leaflet';
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
	props: {
        coordinates: { type: Array, required: true },
        height: { type: Number, default: 350 },
        zoom: { type: Number, default: 16 }
    },
	components: {
		LMap,
		LTileLayer,
		LMarker
	},
	data () {
		return {
			url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
		};
	}
}
</script>