import {GuiCellView, GuiColumn, GuiDataType} from "@generic-ui/ngx-grid";

export let  columns: Array<GuiColumn> = [
  {
    header: 'TSS. #',
    field: 'tss'
  },
  {
    header: 'Booking. #',
    field: 'booking'
  },
  {
    header: 'Container. #',
    field: 'container'
  },
  {
    header: 'Customer',
    field: 'customer'
  },
  {
    header: 'Pin In',
    field: 'pinin'
  },
  {
    header: 'Pin Out',
    field: 'pinout'
  },
  {
    header: 'Driver',
    field: 'driver'
  },
  {
    header: 'Driver Phone #',
    field: 'driverphone'
  },
  {
    header: 'Pre-Pull',
    field: 'prepull'
  },
  {
    header: 'Returned',
    field: 'returned'
  },
  {
    header: 'Unit. #',
    field: 'unit'
  },
  {
    header: 'Pickup Date',
    field: 'pickupdate'
  },
  {
    header: 'Delivery Date',
    field: 'deliverydate'
  },
  {
    header: 'IN Message',
    field: 'inmessage'
  },
  {
    header: 'ERD',
    field: 'erd'
  },
  {
    header: 'Completed',
    field: 'status',
    type: GuiDataType.BOOLEAN,
    view: GuiCellView.CHECKBOX,
  },
  {
    header: 'Notes',
    field: 'notes'
  }
];
