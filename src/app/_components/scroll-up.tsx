"use client";

import * as React from "react";

export default function ScrollUp() {
  React.useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return null;
}
