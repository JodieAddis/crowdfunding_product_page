import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [isCurrentSize, setIsCurrentSize] = useState<boolean>(
    window.innerWidth < 1440 ? true : false,
  );
  //Initialement, la taille de l'écran est celle sur lequel on est.
  useEffect(() => {
    const handleResize = () => {
      setIsCurrentSize(window.innerWidth < 1440 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    //Ecouteur d'évènement 'resize' qui permet de détecter le changement de taille de l'écran. Quand l'écran change, mise à jour de la taille avec l'exécution de  'handleResize'.

    //Clean up :
    return () => {
      //Cleanup de l'écouteur d'évènement
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isCurrentSize;
};

export default useScreenSize;
