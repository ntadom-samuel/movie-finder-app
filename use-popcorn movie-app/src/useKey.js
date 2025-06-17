import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase === key.toLowerCase) {
          action(); //why include function in our dependency array?
        }
      }

      document.addEventListener("keydown", callback); //the callback function here and in the clean up function must be exactly the same.

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
