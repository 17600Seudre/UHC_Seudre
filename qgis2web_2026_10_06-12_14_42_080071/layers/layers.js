var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Perimetre_SAGE_2 = new ol.format.GeoJSON();
var features_Perimetre_SAGE_2 = format_Perimetre_SAGE_2.readFeatures(json_Perimetre_SAGE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetre_SAGE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetre_SAGE_2.addFeatures(features_Perimetre_SAGE_2);
var lyr_Perimetre_SAGE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetre_SAGE_2, 
                style: style_Perimetre_SAGE_2,
                popuplayertitle: 'Perimetre_SAGE',
                interactive: false,
                title: '<img src="styles/legend/Perimetre_SAGE_2.png" /> Perimetre_SAGE'
            });
var format_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3 = new ol.format.GeoJSON();
var features_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3 = format_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3.readFeatures(json_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3.addFeatures(features_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3);
var lyr_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3, 
                style: style_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3,
                popuplayertitle: 'Unités Hydraulique Cohérente - Estuaire de la Seudre',
                interactive: true,
    title: 'Unités Hydraulique Cohérente - Estuaire de la Seudre<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_0.png" /> Arvert<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_1.png" /> Breuillet<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_2.png" /> Chaillevette<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_3.png" /> Étaules<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_4.png" /> L\'Éguille<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_5.png" /> La Tremblade<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_6.png" /> Le Gua<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_7.png" /> Marennes-Hiers-Brouage<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_8.png" /> Mornac-sur-Seudre<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_9.png" /> Nieulle-sur-Seudre<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_10.png" /> Saint-Just-Luzac<br />\
    <img src="styles/legend/UnitsHydrauliqueCohrenteEstuairedelaSeudre_3_11.png" /> Saint-Sulpice-de-Royan<br />' });

lyr_ESRITopo_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Perimetre_SAGE_2.setVisible(true);lyr_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_GoogleSatellite_1,lyr_Perimetre_SAGE_2,lyr_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3];
lyr_Perimetre_SAGE_2.set('fieldAliases', {'Id': 'Id', });
lyr_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3.set('fieldAliases', {'fid': 'fid', 'fid_1': 'fid_1', 'IDNEW': 'Identifiant', 'commune': 'commune', 'NOM_PRISE': 'Nom de la Prise', 'Surface': 'Surface UHC (Ha)', 'Lien_PDF2': 'Lien de téléchargement vers la fiche UHC', 'Fil_eau': 'Altitude moyenne des claires (fil d\'eau)', 'alti_taill': 'Altitude moyenne de la taillée', 'remp_class': 'Nombre de jours de remplissage actuel', 'remp_slr': 'Nombre de jours de remplissage 2070', 'vid_class': 'Nombre de jours de vidange actuel', 'vid_slr': 'Nombre de jours de vidange 2070', 'coef_class': 'Coef Min avant surverse de la taillée actuel', 'coef_slr': 'Coef Min avant surverse de la taillée 2070', 'surv_class': 'Ocurrences de surverse de la taillée actuel', 'surv_slr': 'Ocurrences de surverse de la taillée 2070', 'usage': 'Usages', });
lyr_Perimetre_SAGE_2.set('fieldImages', {'Id': 'Range', });
lyr_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3.set('fieldImages', {'fid': 'TextEdit', 'fid_1': 'TextEdit', 'IDNEW': 'TextEdit', 'commune': 'TextEdit', 'NOM_PRISE': 'TextEdit', 'Surface': 'TextEdit', 'Lien_PDF2': 'TextEdit', 'Fil_eau': 'TextEdit', 'alti_taill': 'TextEdit', 'remp_class': 'TextEdit', 'remp_slr': 'TextEdit', 'vid_class': 'TextEdit', 'vid_slr': 'TextEdit', 'coef_class': 'TextEdit', 'coef_slr': 'TextEdit', 'surv_class': 'TextEdit', 'surv_slr': 'TextEdit', 'usage': 'TextEdit', });
lyr_Perimetre_SAGE_2.set('fieldLabels', {'Id': 'hidden field', });
lyr_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3.set('fieldLabels', {'fid': 'hidden field', 'fid_1': 'hidden field', 'IDNEW': 'inline label - always visible', 'commune': 'inline label - always visible', 'NOM_PRISE': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Lien_PDF2': 'inline label - always visible', 'Fil_eau': 'inline label - always visible', 'alti_taill': 'inline label - always visible', 'remp_class': 'inline label - always visible', 'remp_slr': 'inline label - always visible', 'vid_class': 'inline label - always visible', 'vid_slr': 'inline label - always visible', 'coef_class': 'inline label - always visible', 'coef_slr': 'inline label - always visible', 'surv_class': 'inline label - always visible', 'surv_slr': 'inline label - always visible', 'usage': 'inline label - always visible', });
lyr_UnitsHydrauliqueCohrenteEstuairedelaSeudre_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});