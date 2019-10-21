import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { getVideoId } from "../../utils/Youtube";
import YouTube from "react-youtube";

const Container = styled.div`
  width: 100%;
`;

const VideoContainer = styled.div`
  position: relative;
`;

const ImageOverlay = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const PlayButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  transition: opacity 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const PlayButtonFill = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: #fff;
  z-index: -1;
`;

const YoutubeContainer = styled(YouTube)`
  width: 100%;
  height: 600px;
`;

const Video = ({ name, thumbnail, hideVideo, youtube }) => {
  const [showVideo, setShowVideo] = useState(false);

  if (hideVideo) {
    return <ImageOverlay src={thumbnail} alt={name} />;
  }

  const videoId = getVideoId(youtube);

  return (
    <Container>
      <VideoContainer>
        {!showVideo && (
          <>
            <ImageOverlay src={thumbnail} alt={name} />
            <PlayButtonContainer onClick={() => setShowVideo(true)}>
              <PlayButtonFill />
              <PlayCircleFilledIcon
                style={{
                  width: 120,
                  height: 120,
                  color: "#fb6340"
                }}
              />
            </PlayButtonContainer>
          </>
        )}
        {showVideo && (
          <YoutubeContainer
            videoId={videoId}
            opts={{ playerVars: { autoplay: 1 } }}
          />
        )}
      </VideoContainer>
    </Container>
  );
};

Video.propTypes = {
  /* will only render the thumbnail image is true */
  hideVideo: PropTypes.bool
};

export default Video;
