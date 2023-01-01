import { useTheme } from 'next-themes';
import React from 'react'
import DataTable, { createTheme, defaultThemes } from 'react-data-table-component';
import { MdKeyboardArrowDown } from 'react-icons/md';

const color = {
   bgRed500 : '#B91C1C',
   bgRed900: '#991B1B',
   bgGray400: '#9CA3AF',
   bgGray500: '#6c7281',
   bgLightPrimary: '#ffedec',
   bgDarkLightPrimary: '#d5b5b3'
}

createTheme('customLight', {
   background: {
      default: '#fff',
   },
   button: {
      default: "#66748c",
   },
   striped: {
      default: '#F5F7FB',
      text: '#66748c'
   },
   highlightOnHover: {
      default: '#f5f7fb75',
      text: color.bgGray500
   },
   text: {
      primary: color.bgGray500, 
   },
   selected: {
      default: '#f5f7fb87',
      text: '#66748c'
   },
   context: {
      background: '#f5f7fb',
      text: color.bgGray500,
   },
   divider: {
      default: '#eff2f5',
   },
   action: {
      button: '#ff0d0d89',
      hover: '#e9323214',
      disabled: 'rgba(0,0,0,.12)',
   },
});

createTheme('customDark', {
   background: {
      default: '#2A2A2A',
   },
   button: {
      default: "#66748c",
   },
   striped: {
      default: '#F5F7FB',
      text: '#66748c'
   },
   highlightOnHover: {
      default: '#3d3d3d',
      text: color.bgGray400
   },
   text: {
      primary: color.bgGray400, // bg-gray-400
      secondary: '#e3e8f0',
   },
   selected: {
      default: '#3d3d3d',
      text: '#96a3b9'
   },
   context: {
      background: '#3d3d3d', // bg-dark-dept-2
      text: color.bgGray400, // bg-gray-400
   },
   divider: {
      default: '#eff2f51a', // color-border-dark
   },
   action: {
      button: '#ff0d0d89',
      hover: '#e9323214',
      disabled: 'rgba(0,0,0,.12)',
   },
});

const Table = ({ ...props }: any) => {

  const { theme } = useTheme();
  const themeDataTable = theme == 'dark' ? 'customDark' : 'customLight';



  const customStyles = {
      headCells: {
         style: {
            // override the cell padding for data cells
            fontSize: ' 0.875rem',
            lineHeight: '1.25rem',
            backgroundColor: theme == 'dark' ? '#3d3d3d' : '#F5F7FB',  // bg-dark-dept-2
            fontFamily: 'var(--font-inter-semibold)',
         },
      },
      rows: {
         style: {
            '&:not(:last-of-type)': {
               borderBottomStyle: 'dashed',
               borderBottomWidth: '1px',
               borderBottomColor: defaultThemes[themeDataTable].divider.default,
            },
         },
      },
      header: {
         // Title 
         style: {
            fontSize: '1rem',
            // margin: '1rem 0',
            marginBottom: '1rem',
            padding: 0,
            fontFamily: 'var(--font-inter-semibold)',
         },
      },
      cells: {
         style: {
            padding: '1rem 1.25rem', // override the cell padding for data cells
            fontSize: '0.875rem',
            wordBreak: 'break-word'
         },
      },
      contextMenu: {
         style: {
            backgroundColor: defaultThemes[themeDataTable].context.background,
            fontSize: '14px',
            color: defaultThemes[themeDataTable].context.text,
            borderRadius: '0.375rem', // rounded-md
            padding: '1rem',
            transform: 'translate3d(0, -100%, 0)',
            transitionDuration: '125ms',
            transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            willChange: 'transform',
         },
         activeStyle: {
            transform: 'translate3d(0, 0, 0)',
         },
      },
      pagination: {
         style: {
            color: defaultThemes[themeDataTable].text.primary,
            fontSize: '0.875rem', // text-sm
            lineHeight: '1.25rem',
            minHeight: '56px',
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderTopColor: defaultThemes[themeDataTable].divider.default
         },
         pageButtonsStyle: {
            borderRadius: '0.375rem',
            height: '40px',
            width: '40px',
            padding: '8px',
            margin: 'px',
            cursor: 'pointer',
            fill: defaultThemes[themeDataTable].text.primary,
            transition: '0.4s',
            backgroundColor: 'transparent',
            '&:disabled': {
               cursor: 'not-allowed',
               fill: defaultThemes[themeDataTable].text.primary,
               opacity: '.2'
            },
            '&:hover:not(:disabled)': {
               background: (themeDataTable == 'customLight') ? color.bgLightPrimary : color.bgDarkLightPrimary,
               fill: (themeDataTable == 'customLight') ? color.bgRed500 : color.bgRed900,
               borderRadius: '0.375rem',
            },
            '&:focus': {
               outline: 'none',
               backgroundColor: (themeDataTable == 'customLight') ? color.bgLightPrimary : color.bgDarkLightPrimary,
               fill: (themeDataTable == 'customLight') ? color.bgRed500 : color.bgRed900
            },
         },
      },
   };

  return (
    <DataTable
         {...props}
         theme={theme == 'dark' ? 'customDark' : 'customLight'}
         customStyles={customStyles}
         paginationServer={false}
         pagination={true}
         defaultSortAsc={false}
         defaultSortFieldId={1}
         sortIcon={<MdKeyboardArrowDown />}
         striped={false}
         highlightOnHover={true}
         pointerOnHover={false}
         persistTableHead={true}
         selectableRowsHighlight={true}
         noDataComponent={"Data not available"}
      />
  )
}

export default Table