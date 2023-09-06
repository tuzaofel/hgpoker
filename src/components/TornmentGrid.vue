<template>
    <button @click="deselectRows">deselect rows</button>
    <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 500px"
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
      @cell-clicked="cellWasClicked"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
   </template>
   
   <script>
   import { AgGridVue } from "ag-grid-vue3";  // the AG Grid Vue Component
   import { reactive, onMounted, ref } from "vue";
   
   import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
   import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
   

  import {getAllTornments} from '../services/hgApi';
  


   export default {
    name: "App",
    components: {
      AgGridVue,
    },
    setup() {
      const gridApi = ref(null); // Optional - for accessing Grid's API
   
      // Obtain API from grid's onGridReady event
      const onGridReady = (params) => {
        gridApi.value = params.api;
      };
   
      const rowData = reactive({}); // Set rowData to Array of Objects, one Object per Row
   
      // Each Column Definition results in one Column.
      const columnDefs = reactive({
        value: [
            
             { field: "data", headerName: "Data", type: ['dateColumn', 'nonEditableColumn'], cellDataType: 'date', valueFormatter: params =>  {
              const dateObj = new Date(params.value);
              return `${dateObj.getDate().toLocaleString()}/${dateObj.getMonth()+1}/${dateObj.getFullYear()}`
            }},
             { field: "torneio", headerName: "Torneio",type: [ 'nonEditableColumn'], cellDataType: 'text'},
             {  field: "buyinPreco", headerName: "Valor Buy-In",type: ['nonEditableColumn'], cellDataType: 'number', valueFormatter: params => `R$ ${params.value},00`},
             {  field: "buyinStack", headerName: "Fichas Buy-In",type: ['agNumberColumnFilter', 'nonEditableColumn'], cellDataType: 'number', valueFormatter: params => `${params.value/1000} K`},
      ]
      });
   
      // DefaultColDef sets props common to all Columns
      const defaultColDef = {
        sortable: true,
        filter: true,
        flex: 1
      };
   
      // Example load data from server
      onMounted(() => {
        getAllTornments().then((remoteRowData) => (rowData.value = remoteRowData.data));
      });
   
      return {
        onGridReady,
        columnDefs,
        rowData,
        defaultColDef,
        cellWasClicked: (event) => { // Example of consuming Grid Event
          console.log("cell was clicked", event);
        },
        deselectRows: () =>{
          gridApi.value.deselectAll()
        }
      };
    },
   };
   </script>
   
   <style lang="scss"></style>