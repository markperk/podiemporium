import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  videoResponsive: {
    overflow: 'hidden',
    paddingTop: 15,
    marginBottom: 20,
    paddingBottom: '56.25%',
    position: 'relative',
    height: 0
  },
  videoIframe: {
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
})

const YoutubeEmbed = ({ embedId, classes }) => (
  <div className={classes.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default withStyles(styles)(YoutubeEmbed)