import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from '../../Layout'
import { Link } from 'react-router-dom'
import { Typography, Icon, Button, Divider } from '@material-ui/core'
import DownloadIcon from '@material-ui/icons/CloudDownload'
import YoutubeEmbed from './VideoEmbed'

const getStyle = () => {
  return {
    background: 'white',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    flex: 1,
    height: '90%',
    width: '90%',
    margin: '0 auto',
    padding: '3em',
    overflowY: 'scroll'
  }
}

const Guide = ({ guides }) => {

  return (
    <Flexbox style={getStyle()}>
      <Flexbox flexDirection="column" flex="1">
        <Flexbox justifyContent="space-between">
          <Typography variant='h5'>
            {guides.get('title')}
          </Typography>
          <Link to={{ pathname: guides.get('download_link')}} target="_blank" download>
            <Button variant="contained" size="small" style={{ margin: 8 }}>
              <DownloadIcon style={{ marginRight: 8, fontSize: 20 }} />
            Download Repository
          </Button>
          </Link>
        </Flexbox>
        <YoutubeEmbed embedId={guides.get('embedId')} />
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant='h6'>
          Getting Started
        </Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant='p' style={{ paddingTop: 10, paddingBottom: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant='h6'>
          Understanding the build
        </Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant='p' style={{ paddingTop: 10, paddingBottom: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant='h6'>
          The code
        </Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant='p' style={{ paddingTop: 10, paddingBottom: 12 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <pre style={{ background: 'lightgray', fontFamily: 'sans-serif', fontSize: 12, color: 'gray' }}>
          {`        
            const tile = {
              type: "tile",
              attributes: {
              title: "Video Chat",
              subtitle: "https://vid.podium.co",
              icon: "https://assets.podium.com/icons/video-w-gray-bg.png"
            },
            dynamicSend: {
              url: "http://localhost:9002/dynamicSend",
                data: JSON.stringify({
                  some: "special",
                  stuff: "cool"
                }),
                keys: [
                  {
                    name: "some",
                    required: true,
                    scrub: false
                  },
                  {
                    name: "stuff",
                    required: false
                  }
                ]
              }
            };

            const theBody = {
              type: "body",
              attributes: {
                text: "Hey Susan I hope you had an awesome day!! Was just wondering if you got that email from Greg??",
                isEditable: true
              },
              dynamicSend: {
                url: "http://localhost:9002/body"
              }
            };
        `}
        </pre>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant='h6'>
          Bringing it all together
        </Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant='p' style={{ paddingTop: 10, paddingBottom: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      </Flexbox>
    </Flexbox>
  )
}

Guide.propTypes = {
  guides: PropTypes.object.isRequired,
  style: PropTypes.object,
}

export default Guide