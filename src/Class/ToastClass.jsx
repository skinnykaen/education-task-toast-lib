import React from "react";
import {Toast} from "../Toast/Toast";

class _Toast {
  constructor() {

  }

  create() {
    return (
      <Toast/>
    );
  }
}

const toast = new _Toast();

export { toast };
