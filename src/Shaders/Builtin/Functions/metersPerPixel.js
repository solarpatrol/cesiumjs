//This file is automatically rebuilt by the Cesium build process.
/*global define*/
define(function() {
    'use strict';
    return "float czm_metersPerPixel(vec4 positionEC)\n\
{\n\
float width = czm_viewport.z;\n\
float height = czm_viewport.w;\n\
float pixelWidth;\n\
float pixelHeight;\n\
float top = czm_frustumPlanes.x;\n\
float bottom = czm_frustumPlanes.y;\n\
float left = czm_frustumPlanes.z;\n\
float right = czm_frustumPlanes.w;\n\
if (czm_sceneMode == czm_sceneMode2D)\n\
{\n\
float frustumWidth = right - left;\n\
float frustumHeight = top - bottom;\n\
pixelWidth = frustumWidth / width;\n\
pixelHeight = frustumHeight / height;\n\
}\n\
else\n\
{\n\
float distanceToPixel = -positionEC.z;\n\
float inverseNear = 1.0 / czm_currentFrustum.x;\n\
float tanTheta = top * inverseNear;\n\
pixelHeight = 2.0 * distanceToPixel * tanTheta / height;\n\
tanTheta = right * inverseNear;\n\
pixelWidth = 2.0 * distanceToPixel * tanTheta / width;\n\
}\n\
return max(pixelWidth, pixelHeight);\n\
}\n\
";
});