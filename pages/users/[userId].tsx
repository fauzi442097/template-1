import { useRouter } from 'next/router'
import React from 'react'
import Button from '../../components/Button';
import Card from '../../components/Card';

const User = ({ user }: any) => {
  const router = useRouter();
  const { userId } = router.query;

  console.log(user);

  let data = '';
  for (const key in user) {
    data += (`<p> ${key} : ${user[key]}</p>`);
  }

  if ( router.isFallback ) return <div> Loading ...</div>;


  return (
    <Card>
      <Card.Header>
        <h6 className='mb-0'> User </h6>
        <Button.OutlinePrimary onClick={() => router.push('/users')}> Kembali </Button.OutlinePrimary>
      </Card.Header>
      <Card.Body>
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </Card.Body>
    </Card>
  )
}

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://dummyjson.com/users`);
//     const users = await res.json();

//     const paths = users.users.map((item:any) => ({
//       params: {
//         userId: `${item.id}`
//       }
//     }))

//     return {
//       paths,
//       fallback: false // hanya akan mengambil data pada saat proses buildtime, 
//       // jika data tidak ditemukan maka otomatis redirect ke 404
//     } 
// }

// export const getStaticProps = async ({ params }: any ) => {
//    console.log(params);
//    const res = await fetch(`https://dummyjson.com/users/${params.userId}`);
//    const user = await res.json();

//    return {
//       props: {
//          user
//       }
//    }
// }

export const getServerSideProps = async ({ params} : any ) => {
  console.log(params);
  const res = await fetch(`https://dummyjson.com/userdaads/${params.userId}`);
  const user = await res.json();

  return {
    props: {
      user
    }
  }
} 

export default User