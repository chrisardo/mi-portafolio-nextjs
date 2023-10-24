import Layout from "../components/Layout";

const _error = ({ statusCode }) => {//Recibiendo el statusCode
    return (
        <Layout title="Algo salió mal. :(" footer={false}>
            <p className="text-center">
                {/* Si el statusCode es true, entonces se muestra el mensaje de error, de lo contrario se muestra el mensaje de que no se pudo acceder a la página */}
                {statusCode
                    ? `No se pudieron cargar tus datos de usuario: Código de estado ${statusCode}`
                    : "No se pudo acceder a esa página, lo siento."}
            </p>
        </Layout>
    );
};

export default _error;