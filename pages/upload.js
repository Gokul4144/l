
import { useState } from "react";
import { storage } from "@/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = () => {
    if (!file) return;
    const fileRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on("state_changed", null, console.error, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(setUrl);
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload a File to Firebase</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {url && <p>Download Link: <a href={url} target="_blank">{url}</a></p>}
    </div>
  );
}
