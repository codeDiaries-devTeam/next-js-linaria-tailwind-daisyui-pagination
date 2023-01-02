import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch('https://api.github.com/users?per_page=100&since=1000');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://api.github.com/users/' + id);
  const data = await res.json();

  return {
    props: { users: data }
  }
}

const myLoader = ({src}) => {
  return `https://avatars.githubusercontent.com/${src}/12434574?v=4`
}

const Dynamic = (props) => {
  const data=props.users;
  
const date = new Date(data.created_at) // formated_Date - SDK returned date
console.log(data);
const newDate =`(${date.getFullYear()}-${date.getMonth() +1 }-${date.getDate()}) / (${date.getHours()}:${date.getMinutes()}:${date.getSeconds()})`;
  
  
  
  return <>
  <Image className="rounded-3xl" loader={myLoader} src="u" alt="Github_Avatar" width={500} height={500}/>
  <p>Created (Date / Hour) : {newDate}</p>
  </>;
};

export default Dynamic;
