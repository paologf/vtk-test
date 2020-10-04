<template>
  <p>Hello world</p> </template
>>

<script>
import * as vtkCommon from "vtk.js/Sources/Common";
import * as vtkFilters from "vtk.js/Sources/Filters";
import * as vtkRenderingCore from "vtk.js/Sources/Rendering/Core";
import * as vtkRenderingMisc from "vtk.js/Sources/Rendering/Misc";
import * as vtkInteraction from "vtk.js/Sources/Interaction";

export default {
  name: "Test",
  data() {
    return {};
  },
  mounted: function() {
    this.$nextTick(function() {
      console.log("MOUNTED");
      console.log("vtkCommon", vtkCommon);
      console.log("vtkFilters", vtkFilters);
      console.log("vtkRenderingCore", vtkRenderingCore);
      console.log("vtkRenderingMisc", vtkRenderingMisc);
      console.log("vtkInteraction", vtkInteraction);
    });
  }
};</script
>>
