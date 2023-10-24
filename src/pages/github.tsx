import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
  if (statusCode) { //Si statuscode existe entonces se muestra el componente Error
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title="My Github" footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" style={{ width: "100%" }} />
            <p>{user.bio}</p>
            <p>{user.location}</p>
            <a
              href={user.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              Mi Blog
            </a>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Ir a mi Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Github.proptypes = {};

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.github.com/users/chrisardo"
  );
  const data = await res.json(); //Obteniendo los datos de la API

  const statusCode = res.status > 200 ? res.status : false; //Si el status es mayor a 200, entonces statusCode es igual al status, de lo contrario es false

  return {
    //Retornando los props
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Github;