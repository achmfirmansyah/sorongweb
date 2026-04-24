var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_jumlah_btt_1 = new ol.format.GeoJSON();
var features_jumlah_btt_1 = format_jumlah_btt_1.readFeatures(json_jumlah_btt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jumlah_btt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jumlah_btt_1.addFeatures(features_jumlah_btt_1);
var lyr_jumlah_btt_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jumlah_btt_1, 
                style: style_jumlah_btt_1,
                popuplayertitle: 'jumlah_btt',
                interactive: false,
    title: 'jumlah_btt<br />\
    <img src="styles/legend/jumlah_btt_1_0.png" /> 0 - 24<br />\
    <img src="styles/legend/jumlah_btt_1_1.png" /> 24 - 49<br />\
    <img src="styles/legend/jumlah_btt_1_2.png" /> 49 - 89<br />\
    <img src="styles/legend/jumlah_btt_1_3.png" /> 89 - 215<br />\
    <img src="styles/legend/jumlah_btt_1_4.png" /> 215 - 336<br />' });
var format_klg_desil4_2 = new ol.format.GeoJSON();
var features_klg_desil4_2 = format_klg_desil4_2.readFeatures(json_klg_desil4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_klg_desil4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_klg_desil4_2.addFeatures(features_klg_desil4_2);
var lyr_klg_desil4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_klg_desil4_2, 
                style: style_klg_desil4_2,
                popuplayertitle: 'klg_desil4',
                interactive: false,
    title: 'klg_desil4<br />\
    <img src="styles/legend/klg_desil4_2_0.png" /> 0 - 17<br />\
    <img src="styles/legend/klg_desil4_2_1.png" /> 17 - 40<br />\
    <img src="styles/legend/klg_desil4_2_2.png" /> 40 - 79<br />\
    <img src="styles/legend/klg_desil4_2_3.png" /> 79 - 137<br />\
    <img src="styles/legend/klg_desil4_2_4.png" /> 137 - 249<br />' });
var format_presentase_klg_desil4_3 = new ol.format.GeoJSON();
var features_presentase_klg_desil4_3 = format_presentase_klg_desil4_3.readFeatures(json_presentase_klg_desil4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_presentase_klg_desil4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_presentase_klg_desil4_3.addFeatures(features_presentase_klg_desil4_3);
var lyr_presentase_klg_desil4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_presentase_klg_desil4_3, 
                style: style_presentase_klg_desil4_3,
                popuplayertitle: 'presentase_klg_desil4',
                interactive: true,
    title: 'presentase_klg_desil4<br />\
    <img src="styles/legend/presentase_klg_desil4_3_0.png" /> 0 - 12<br />\
    <img src="styles/legend/presentase_klg_desil4_3_1.png" /> 12 - 26<br />\
    <img src="styles/legend/presentase_klg_desil4_3_2.png" /> 26 - 38<br />\
    <img src="styles/legend/presentase_klg_desil4_3_3.png" /> 38 - 56<br />\
    <img src="styles/legend/presentase_klg_desil4_3_4.png" /> 56 - 100<br />' });
var group_Sorong = new ol.layer.Group({
                                layers: [lyr_jumlah_btt_1,lyr_klg_desil4_2,lyr_presentase_klg_desil4_3,],
                                fold: 'open',
                                title: 'Sorong'});

lyr_GoogleHybrid_0.setVisible(true);lyr_jumlah_btt_1.setVisible(true);lyr_klg_desil4_2.setVisible(true);lyr_presentase_klg_desil4_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_Sorong];
lyr_jumlah_btt_1.set('fieldAliases', {'fid': 'fid', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'nmsls': 'nmsls', 'idsls': 'idsls', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'kk': 'kk', 'jlh_klg_desil_4_kebawah': 'jlh_klg_desil_4_kebawah', 'jlh_ppd_desil_4_kebawah': 'jlh_ppd_desil_4_kebawah', 'jumlah_keluarga': 'jumlah_keluarga', 'jumlah_penduduk': 'jumlah_penduduk', 'wilker_btt': 'wilker_btt', 'wilker_bttk': 'wilker_bttk', 'wilker_bku': 'wilker_bku', 'wilker_bbtt_nonusaha': 'wilker_bbtt_nonusaha', 'wilker_usaha': 'wilker_usaha', 'wilker_kk': 'wilker_kk', 'presentase_keluarga_desil4': 'presentase_keluarga_desil4', 'Category': 'Category', });
lyr_klg_desil4_2.set('fieldAliases', {'fid': 'fid', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'nmsls': 'nmsls', 'idsls': 'idsls', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'kk': 'kk', 'jlh_klg_desil_4_kebawah': 'jlh_klg_desil_4_kebawah', 'jlh_ppd_desil_4_kebawah': 'jlh_ppd_desil_4_kebawah', 'jumlah_keluarga': 'jumlah_keluarga', 'jumlah_penduduk': 'jumlah_penduduk', 'wilker_btt': 'wilker_btt', 'wilker_bttk': 'wilker_bttk', 'wilker_bku': 'wilker_bku', 'wilker_bbtt_nonusaha': 'wilker_bbtt_nonusaha', 'wilker_usaha': 'wilker_usaha', 'wilker_kk': 'wilker_kk', 'presentase_keluarga_desil4': 'presentase_keluarga_desil4', 'Category': 'Category', });
lyr_presentase_klg_desil4_3.set('fieldAliases', {'fid': 'fid', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'nmsls': 'nmsls', 'idsls': 'idsls', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'kk': 'kk', 'jlh_klg_desil_4_kebawah': 'jlh_klg_desil_4_kebawah', 'jlh_ppd_desil_4_kebawah': 'jlh_ppd_desil_4_kebawah', 'jumlah_keluarga': 'jumlah_keluarga', 'jumlah_penduduk': 'jumlah_penduduk', 'wilker_btt': 'wilker_btt', 'wilker_bttk': 'wilker_bttk', 'wilker_bku': 'wilker_bku', 'wilker_bbtt_nonusaha': 'wilker_bbtt_nonusaha', 'wilker_usaha': 'wilker_usaha', 'wilker_kk': 'wilker_kk', 'presentase_keluarga_desil4': 'presentase_keluarga_desil4', 'Category': 'Category', });
lyr_jumlah_btt_1.set('fieldImages', {'fid': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'nmsls': 'TextEdit', 'idsls': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'kk': 'TextEdit', 'jlh_klg_desil_4_kebawah': 'TextEdit', 'jlh_ppd_desil_4_kebawah': 'TextEdit', 'jumlah_keluarga': 'TextEdit', 'jumlah_penduduk': 'TextEdit', 'wilker_btt': 'Range', 'wilker_bttk': 'Range', 'wilker_bku': 'Range', 'wilker_bbtt_nonusaha': 'Range', 'wilker_usaha': 'Range', 'wilker_kk': 'Range', 'presentase_keluarga_desil4': 'TextEdit', 'Category': 'TextEdit', });
lyr_klg_desil4_2.set('fieldImages', {'fid': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'nmsls': 'TextEdit', 'idsls': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'kk': 'TextEdit', 'jlh_klg_desil_4_kebawah': 'TextEdit', 'jlh_ppd_desil_4_kebawah': 'TextEdit', 'jumlah_keluarga': 'TextEdit', 'jumlah_penduduk': 'TextEdit', 'wilker_btt': 'Range', 'wilker_bttk': 'Range', 'wilker_bku': 'Range', 'wilker_bbtt_nonusaha': 'Range', 'wilker_usaha': 'Range', 'wilker_kk': 'Range', 'presentase_keluarga_desil4': 'TextEdit', 'Category': 'TextEdit', });
lyr_presentase_klg_desil4_3.set('fieldImages', {'fid': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'nmsls': 'TextEdit', 'idsls': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'kk': 'TextEdit', 'jlh_klg_desil_4_kebawah': 'TextEdit', 'jlh_ppd_desil_4_kebawah': 'TextEdit', 'jumlah_keluarga': 'TextEdit', 'jumlah_penduduk': 'TextEdit', 'wilker_btt': 'Range', 'wilker_bttk': 'Range', 'wilker_bku': 'Range', 'wilker_bbtt_nonusaha': 'Range', 'wilker_usaha': 'Range', 'wilker_kk': 'Range', 'presentase_keluarga_desil4': 'TextEdit', 'Category': 'TextEdit', });
lyr_jumlah_btt_1.set('fieldLabels', {'fid': 'no label', 'nmkec': 'no label', 'nmdesa': 'no label', 'nmsls': 'no label', 'idsls': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'kk': 'no label', 'jlh_klg_desil_4_kebawah': 'no label', 'jlh_ppd_desil_4_kebawah': 'no label', 'jumlah_keluarga': 'no label', 'jumlah_penduduk': 'no label', 'wilker_btt': 'no label', 'wilker_bttk': 'no label', 'wilker_bku': 'no label', 'wilker_bbtt_nonusaha': 'no label', 'wilker_usaha': 'no label', 'wilker_kk': 'no label', 'presentase_keluarga_desil4': 'no label', 'Category': 'no label', });
lyr_klg_desil4_2.set('fieldLabels', {'fid': 'no label', 'nmkec': 'no label', 'nmdesa': 'no label', 'nmsls': 'no label', 'idsls': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'kk': 'no label', 'jlh_klg_desil_4_kebawah': 'no label', 'jlh_ppd_desil_4_kebawah': 'no label', 'jumlah_keluarga': 'no label', 'jumlah_penduduk': 'no label', 'wilker_btt': 'no label', 'wilker_bttk': 'no label', 'wilker_bku': 'no label', 'wilker_bbtt_nonusaha': 'no label', 'wilker_usaha': 'no label', 'wilker_kk': 'no label', 'presentase_keluarga_desil4': 'no label', 'Category': 'no label', });
lyr_presentase_klg_desil4_3.set('fieldLabels', {'fid': 'hidden field', 'nmkec': 'inline label - visible with data', 'nmdesa': 'inline label - visible with data', 'nmsls': 'inline label - visible with data', 'idsls': 'hidden field', 'nmprov': 'hidden field', 'nmkab': 'hidden field', 'kk': 'hidden field', 'jlh_klg_desil_4_kebawah': 'inline label - visible with data', 'jlh_ppd_desil_4_kebawah': 'inline label - visible with data', 'jumlah_keluarga': 'inline label - visible with data', 'jumlah_penduduk': 'inline label - visible with data', 'wilker_btt': 'inline label - visible with data', 'wilker_bttk': 'inline label - visible with data', 'wilker_bku': 'hidden field', 'wilker_bbtt_nonusaha': 'hidden field', 'wilker_usaha': 'hidden field', 'wilker_kk': 'hidden field', 'presentase_keluarga_desil4': 'inline label - visible with data', 'Category': 'hidden field', });
lyr_presentase_klg_desil4_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});