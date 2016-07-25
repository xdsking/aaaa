/**
 * Created by xuds on 2016/6/20.
 */
define(function (require, exports, module) {
    var createWMSLayer = function (params) {
        var layer = new ol.layer.Tile({
            source: new ol.source.TileWMS(params)
        });
        return layer;
    };
    var createWMTSLayer = function (params) {

    };
    var createWFSLayer = function (params) {

    };
    return {
        addLayer: function (map, params) {
            var type=params.type,layer;
            switch (type){
                case "WMS":
                    layer=createWMSLayer(params);
                    break;
                case "WMTS":
                    layer=createWMTSLayer(params);
                    break;
                case "WFS":
                    layer=createWFSLayer(params);
                    break;
                default :
                    console.log("获取图层类型失败");
                    return;
            }
            map.addLayer(layer);
        }
    }
});