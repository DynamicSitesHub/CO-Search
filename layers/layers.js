var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_XCELCOTerritory_1 = new ol.format.GeoJSON();
var features_XCELCOTerritory_1 = format_XCELCOTerritory_1.readFeatures(json_XCELCOTerritory_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XCELCOTerritory_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XCELCOTerritory_1.addFeatures(features_XCELCOTerritory_1);
var lyr_XCELCOTerritory_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_XCELCOTerritory_1, 
                style: style_XCELCOTerritory_1,
                interactive: true,
                title: '<img src="styles/legend/XCELCOTerritory_1.png" /> XCEL CO Territory'
            });
var format_HIFLDCOSubsAll_2 = new ol.format.GeoJSON();
var features_HIFLDCOSubsAll_2 = format_HIFLDCOSubsAll_2.readFeatures(json_HIFLDCOSubsAll_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIFLDCOSubsAll_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIFLDCOSubsAll_2.addFeatures(features_HIFLDCOSubsAll_2);
var lyr_HIFLDCOSubsAll_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HIFLDCOSubsAll_2, 
                style: style_HIFLDCOSubsAll_2,
                interactive: true,
                title: '<img src="styles/legend/HIFLDCOSubsAll_2.png" /> HIFLD CO Subs - All'
            });
var format_XCELTargetSubs_3 = new ol.format.GeoJSON();
var features_XCELTargetSubs_3 = format_XCELTargetSubs_3.readFeatures(json_XCELTargetSubs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XCELTargetSubs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XCELTargetSubs_3.addFeatures(features_XCELTargetSubs_3);
var lyr_XCELTargetSubs_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_XCELTargetSubs_3, 
                style: style_XCELTargetSubs_3,
                interactive: true,
    title: 'XCEL Target Subs<br />\
    <img src="styles/legend/XCELTargetSubs_3_0.png" /> M<br />\
    <img src="styles/legend/XCELTargetSubs_3_1.png" /> V<br />\
    <img src="styles/legend/XCELTargetSubs_3_2.png" /> <br />'
        });
var format_XCELHCDissolved1_4 = new ol.format.GeoJSON();
var features_XCELHCDissolved1_4 = format_XCELHCDissolved1_4.readFeatures(json_XCELHCDissolved1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XCELHCDissolved1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XCELHCDissolved1_4.addFeatures(features_XCELHCDissolved1_4);
var lyr_XCELHCDissolved1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_XCELHCDissolved1_4, 
                style: style_XCELHCDissolved1_4,
                interactive: true,
    title: 'XCEL HC Dissolved 1<br />\
    <img src="styles/legend/XCELHCDissolved1_4_0.png" /> 1<br />\
    <img src="styles/legend/XCELHCDissolved1_4_1.png" /> 1, 2<br />\
    <img src="styles/legend/XCELHCDissolved1_4_2.png" /> 1, 2, 3<br />\
    <img src="styles/legend/XCELHCDissolved1_4_3.png" /> 1, 3<br />\
    <img src="styles/legend/XCELHCDissolved1_4_4.png" /> 1, 3, 2<br />\
    <img src="styles/legend/XCELHCDissolved1_4_5.png" /> 2<br />\
    <img src="styles/legend/XCELHCDissolved1_4_6.png" /> 2, 1<br />\
    <img src="styles/legend/XCELHCDissolved1_4_7.png" /> 2, 1, 3<br />\
    <img src="styles/legend/XCELHCDissolved1_4_8.png" /> 2, 3<br />\
    <img src="styles/legend/XCELHCDissolved1_4_9.png" /> 2, 3, 1<br />\
    <img src="styles/legend/XCELHCDissolved1_4_10.png" /> 3<br />\
    <img src="styles/legend/XCELHCDissolved1_4_11.png" /> 3, 1<br />\
    <img src="styles/legend/XCELHCDissolved1_4_12.png" /> 3, 1, 2<br />\
    <img src="styles/legend/XCELHCDissolved1_4_13.png" /> 3, 2<br />\
    <img src="styles/legend/XCELHCDissolved1_4_14.png" /> 3, 2, 1<br />\
    <img src="styles/legend/XCELHCDissolved1_4_15.png" /> <br />'
        });
var format_CountyBoundariesMercatorshp_5 = new ol.format.GeoJSON();
var features_CountyBoundariesMercatorshp_5 = format_CountyBoundariesMercatorshp_5.readFeatures(json_CountyBoundariesMercatorshp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyBoundariesMercatorshp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundariesMercatorshp_5.addFeatures(features_CountyBoundariesMercatorshp_5);
var lyr_CountyBoundariesMercatorshp_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CountyBoundariesMercatorshp_5, 
                style: style_CountyBoundariesMercatorshp_5,
                interactive: true,
                title: '<img src="styles/legend/CountyBoundariesMercatorshp_5.png" /> County Boundaries Mercator.shp'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_XCELCOTerritory_1.setVisible(true);lyr_HIFLDCOSubsAll_2.setVisible(true);lyr_XCELTargetSubs_3.setVisible(true);lyr_XCELHCDissolved1_4.setVisible(true);lyr_CountyBoundariesMercatorshp_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_XCELCOTerritory_1,lyr_HIFLDCOSubsAll_2,lyr_XCELTargetSubs_3,lyr_XCELHCDissolved1_4,lyr_CountyBoundariesMercatorshp_5];
lyr_XCELCOTerritory_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP': 'ZIP', 'TELEPHONE': 'TELEPHONE', 'TYPE': 'TYPE', 'COUNTRY': 'COUNTRY', 'NAICS_CODE': 'NAICS_CODE', 'NAICS_DESC': 'NAICS_DESC', 'SOURCE': 'SOURCE', 'SOURCEDATE': 'SOURCEDATE', 'VAL_METHOD': 'VAL_METHOD', 'VAL_DATE': 'VAL_DATE', 'WEBSITE': 'WEBSITE', 'REGULATED': 'REGULATED', 'CNTRL_AREA': 'CNTRL_AREA', 'PLAN_AREA': 'PLAN_AREA', 'HOLDING_CO': 'HOLDING_CO', 'SUMMR_PEAK': 'SUMMR_PEAK', 'WINTR_PEAK': 'WINTR_PEAK', 'SUMMER_CAP': 'SUMMER_CAP', 'WINTER_CAP': 'WINTER_CAP', 'NET_GEN': 'NET_GEN', 'PURCHASED': 'PURCHASED', 'NET_EX': 'NET_EX', 'RETAIL_MWH': 'RETAIL_MWH', 'WSALE_MWH': 'WSALE_MWH', 'TOTAL_MWH': 'TOTAL_MWH', 'TRANS_MWH': 'TRANS_MWH', 'CUSTOMERS': 'CUSTOMERS', 'YEAR': 'YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_HIFLDCOSubsAll_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'city': 'city', 'state': 'state', 'zip': 'zip', 'type': 'type', 'status': 'status', 'county': 'county', 'countyfips': 'countyfips', 'country': 'country', 'latitude': 'latitude', 'longitude': 'longitude', 'naics_code': 'naics_code', 'naics_desc': 'naics_desc', 'source': 'source', 'sourcedate': 'sourcedate', 'val_method': 'val_method', 'val_date': 'val_date', 'lines': 'lines', 'max_volt': 'max_volt', 'min_volt': 'min_volt', 'max_infer': 'max_infer', 'min_infer': 'min_infer', });
lyr_XCELTargetSubs_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'city': 'city', 'state': 'state', 'zip': 'zip', 'type': 'type', 'status': 'status', 'county': 'county', 'countyfips': 'countyfips', 'country': 'country', 'latitude': 'latitude', 'longitude': 'longitude', 'naics_code': 'naics_code', 'naics_desc': 'naics_desc', 'source': 'source', 'sourcedate': 'sourcedate', 'val_method': 'val_method', 'val_date': 'val_date', 'lines': 'lines', 'max_volt': 'max_volt', 'min_volt': 'min_volt', 'max_infer': 'max_infer', 'min_infer': 'min_infer', 'MV': 'MV', 'Trans': 'Trans', 'Outside': 'Outside', });
lyr_XCELHCDissolved1_4.set('fieldAliases', {'FID': 'FID', 'Id': 'Id', 'MinValue': 'MinValue', 'PhCount': 'PhCount', 'ThreshInVi': 'ThreshInVi', 'Phase': 'Phase', 'Type': 'Type', 'OH_UG': 'OH_UG', 'Voltage': 'Voltage', 'PlanRegion': 'PlanRegion', });
lyr_CountyBoundariesMercatorshp_5.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_XCELCOTerritory_1.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'TELEPHONE': 'TextEdit', 'TYPE': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAICS_CODE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCEDATE': 'DateTime', 'VAL_METHOD': 'TextEdit', 'VAL_DATE': 'DateTime', 'WEBSITE': 'TextEdit', 'REGULATED': 'TextEdit', 'CNTRL_AREA': 'TextEdit', 'PLAN_AREA': 'TextEdit', 'HOLDING_CO': 'TextEdit', 'SUMMR_PEAK': 'Range', 'WINTR_PEAK': 'Range', 'SUMMER_CAP': 'Range', 'WINTER_CAP': 'TextEdit', 'NET_GEN': 'Range', 'PURCHASED': 'Range', 'NET_EX': 'Range', 'RETAIL_MWH': 'Range', 'WSALE_MWH': 'Range', 'TOTAL_MWH': 'Range', 'TRANS_MWH': 'Range', 'CUSTOMERS': 'Range', 'YEAR': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_HIFLDCOSubsAll_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'type': 'TextEdit', 'status': 'TextEdit', 'county': 'TextEdit', 'countyfips': 'TextEdit', 'country': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'naics_code': 'TextEdit', 'naics_desc': 'TextEdit', 'source': 'TextEdit', 'sourcedate': 'DateTime', 'val_method': 'TextEdit', 'val_date': 'DateTime', 'lines': 'TextEdit', 'max_volt': 'TextEdit', 'min_volt': 'TextEdit', 'max_infer': 'TextEdit', 'min_infer': 'TextEdit', });
lyr_XCELTargetSubs_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'type': 'TextEdit', 'status': 'TextEdit', 'county': 'TextEdit', 'countyfips': 'TextEdit', 'country': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'naics_code': 'TextEdit', 'naics_desc': 'TextEdit', 'source': 'TextEdit', 'sourcedate': 'DateTime', 'val_method': 'TextEdit', 'val_date': 'DateTime', 'lines': 'TextEdit', 'max_volt': 'TextEdit', 'min_volt': 'TextEdit', 'max_infer': 'TextEdit', 'min_infer': 'TextEdit', 'MV': 'TextEdit', 'Trans': 'TextEdit', 'Outside': 'TextEdit', });
lyr_XCELHCDissolved1_4.set('fieldImages', {'FID': 'TextEdit', 'Id': 'TextEdit', 'MinValue': 'TextEdit', 'PhCount': 'TextEdit', 'ThreshInVi': 'TextEdit', 'Phase': 'TextEdit', 'Type': 'TextEdit', 'OH_UG': 'TextEdit', 'Voltage': 'TextEdit', 'PlanRegion': 'TextEdit', });
lyr_CountyBoundariesMercatorshp_5.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_XCELCOTerritory_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'TELEPHONE': 'no label', 'TYPE': 'no label', 'COUNTRY': 'no label', 'NAICS_CODE': 'no label', 'NAICS_DESC': 'no label', 'SOURCE': 'no label', 'SOURCEDATE': 'no label', 'VAL_METHOD': 'no label', 'VAL_DATE': 'no label', 'WEBSITE': 'no label', 'REGULATED': 'no label', 'CNTRL_AREA': 'no label', 'PLAN_AREA': 'no label', 'HOLDING_CO': 'no label', 'SUMMR_PEAK': 'no label', 'WINTR_PEAK': 'no label', 'SUMMER_CAP': 'no label', 'WINTER_CAP': 'no label', 'NET_GEN': 'no label', 'PURCHASED': 'no label', 'NET_EX': 'no label', 'RETAIL_MWH': 'no label', 'WSALE_MWH': 'no label', 'TOTAL_MWH': 'no label', 'TRANS_MWH': 'no label', 'CUSTOMERS': 'no label', 'YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_HIFLDCOSubsAll_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'type': 'no label', 'status': 'no label', 'county': 'no label', 'countyfips': 'no label', 'country': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'naics_code': 'no label', 'naics_desc': 'no label', 'source': 'no label', 'sourcedate': 'no label', 'val_method': 'no label', 'val_date': 'no label', 'lines': 'no label', 'max_volt': 'no label', 'min_volt': 'no label', 'max_infer': 'no label', 'min_infer': 'no label', });
lyr_XCELTargetSubs_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'type': 'no label', 'status': 'no label', 'county': 'no label', 'countyfips': 'no label', 'country': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'naics_code': 'no label', 'naics_desc': 'no label', 'source': 'no label', 'sourcedate': 'no label', 'val_method': 'no label', 'val_date': 'no label', 'lines': 'no label', 'max_volt': 'no label', 'min_volt': 'no label', 'max_infer': 'no label', 'min_infer': 'no label', 'MV': 'no label', 'Trans': 'no label', 'Outside': 'no label', });
lyr_XCELHCDissolved1_4.set('fieldLabels', {'FID': 'no label', 'Id': 'no label', 'MinValue': 'no label', 'PhCount': 'no label', 'ThreshInVi': 'no label', 'Phase': 'no label', 'Type': 'no label', 'OH_UG': 'no label', 'Voltage': 'no label', 'PlanRegion': 'no label', });
lyr_CountyBoundariesMercatorshp_5.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_CountyBoundariesMercatorshp_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});