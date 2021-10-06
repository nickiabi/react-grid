import "./styles/Main.css";
import Imagen from "./Imagen";
/*import Columna from "./Columna";*/
import Masonry from "react-masonry-css";
const Main = () => {
  return (
    <main>
      <Masonry
        breakpointCols={6}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
      </Masonry>
      <script>

      </script>
    </main>
  );
};

export default Main;
