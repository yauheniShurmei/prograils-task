import { useEffect, useCallback, useState } from "react";

const useContextMenu = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState("");

  const handleContextMenu = useCallback(
    (event) => {
      console.log(event.target.currentSrc);
      event.preventDefault();
      setSelectedPhotoUrl(event.target.currentSrc);
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setShow, setAnchorPoint]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });
  return { anchorPoint, show, selectedPhotoUrl };
};

export default useContextMenu;
