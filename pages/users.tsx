import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import Card from '../components/Card'
import CheckboxTable from '../components/Table/CheckboxTable';
import Table from '../components/Table/Index';
import Loading from '../components/Table/Loading';

const UsersPage = ({ users } : {
   users: any
}) => {


  const [ listUsers, setListUsers] = useState([]);
  useEffect(() => setListUsers(users.users), []);

  const columns = [
    {
        name: 'Id',
        selector: (row:any) => row.id,
        sortable: true,
        center: false,
    },
    {
        name: 'First Name',
        selector: (row:any) => row.firstName,
        sortable: true,
        center: false
    },
    {
        name: 'Last Name',
        selector: (row:any) => row.lastName,
        sortable: true,
        center: false
    },
    {
        name: 'Email',
        selector: (row:any) => row.email,
        sortable: true,
        center: false
    },
    {
        name: 'Age',
        selector: (row:any) => row.age,
        sortable: true,
        center: false
    },
    {
        name: 'Gender',
        selector: (row:any) => row.gender,
        sortable: true,
        center: false
    },
    {
        name: 'Phone',
        selector: (row:any) => row.phone,
        sortable: true,
        center: false
    },
    {
        name: 'Birth Date',
        selector: (row:any) => row.birthDate,
        sortable: true,
        center: true
    },
    {
        name: 'Action',
        cell: (row: any, index: Number, column:Object, id:String) => <Button.Primary className="btn-sm" onClick={() => alert('tes')}> Detail </Button.Primary>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }
  ];

  return (
    <Card>
      <Card.Body> 
            <Table
            fixedHeader={true}
            theme='customLight'
            columns={columns}
            data={listUsers}
            selectableRows={true}
            pagination={true}
            paginationPerPage={10}
            responsive={true}
            progressPending={false}
            title="Users"
            selectableRowsComponent={CheckboxTable}
            progressComponent={<Loading/>}
            contextActions={<Button.LightPrimary onClick={() => alert('on progress')}>Hapus</Button.LightPrimary>}
            />
      </Card.Body>
    </Card>
  )
}

export const getStaticProps = async () => {
   const res = await fetch('https://dummyjson.com/users');
   const users = await res.json();

   return {
      props: {
         users
      }
   }
}


export default UsersPage