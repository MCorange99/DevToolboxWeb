"use client";

import { useState } from "react";
import * as uuid  from "uuid";
import ReadOnlyTextArea from "@/app/components/common/ReadOnlyTextArea";

function UuidGenerator({name, fn}: {name: string, fn: () => string}) { // ts is dumb, why cant it take the type directly
  const [uuid, setUuid] = useState(fn());

  const generateNewAndCopy = (fn: () => string) => {
    const newUuid = fn();
    setUuid(newUuid);
    navigator.clipboard.writeText(newUuid);
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <ReadOnlyTextArea
          value={uuid}
          title={name}
      />
      <button
        type="button"
        className="h-11 rounded-md mt-4 bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        onClick={() => generateNewAndCopy(fn)}>
      Generate & Copy
      </button>
    </div>
  );
}



export default function UuidGeneratorComponent() {
  

  return (
    <>
      <UuidGenerator name="UUIDv1" fn={uuid.v1}/>
      // TODO: add v3
      <UuidGenerator name="UUIDv4" fn={uuid.v4}/>
      // TODO: add v5
    </>
  );
}
