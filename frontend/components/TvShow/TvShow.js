import React, { useState, useCallback } from "react";

import useSubscription from "../../hooks/useSubscription";

import { Container, Content, BackgroundImage } from "./TvShow.styles";

function TvShow({ title, id, image }) {
  console.log()
  const [isDownloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFinished, setFinished] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const onProgress = useCallback((data) => {
      if(data.progress) {
        setDownloading(true);
        setProgress(data.progress);
      }
      if (data.isCompleted) {
        setFinished(true);
      }
  }, [])
  useSubscription(`torrent-${id}`, onProgress);
  return (
    <Container>
      <BackgroundImage src={image.original} />
      <Content>
        {title}
        {!isDownloading && !isSearching && <div>Airs tonight</div>}
        {!isDownloading && isSearching && !isFinished && <div>Searching for download...</div>}
        {isDownloading && !isFinished && <progress max="100" value={progress}></progress>}
        {isFinished && <div>DONE!!<a href="file:///tmp/webtorrent/4213136583d222a79f7ec175b65337fbb3641e8f">D</a></div>}
      </Content>
    </Container>
  );
}

export default TvShow;
