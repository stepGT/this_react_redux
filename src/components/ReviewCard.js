import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeOn, likeOff } from '../redux/actions';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import SettingsIcon from '@mui/icons-material/Settings';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const likeState = useSelector((state) => {
    const { likeReducer } = state;
    return likeReducer.like;
  });

  const handleClickFavorite = () => {
    likeState ? dispatch(likeOff()) : dispatch(likeOn());
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <>
            <IconButton onClick={handleOpen} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <Stack
                    direction="row"
                    sx={{ mb: 2 }}
                    alignItems="center"
                  >
                    <SettingsIcon />
                    Settings
                  </Stack>
                </Typography>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="On"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="On"
                      control={<Radio />}
                      label="On"
                    />
                    <FormControlLabel
                      value="Off"
                      control={<Radio />}
                      label="Off"
                    />
                  </RadioGroup>
                </FormControl>
                <Stack
                  spacing={3}
                  direction="row"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  <VolumeDown />
                  <Slider
                    aria-label="Volume"
                    value={value}
                    onChange={handleChange}
                  />
                  <VolumeUp />
                </Stack>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel
                    disabled
                    control={<Switch />}
                    label="Disabled"
                  />
                </FormGroup>
              </Box>
            </Modal>
          </>
        }
        title="React Redux"
        subheader="September 1, 2015"
      />
      <CardMedia
        component="img"
        height="194"
        image="react-redux.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          React Redux is the official React UI bindings layer for Redux. It lets
          your React components read data from a Redux store, and dispatch
          actions to the store to update state.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          sx={{ color: likeState ? red[500] : grey[500] }}
          onClick={handleClickFavorite}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Official React bindings for Redux:</Typography>
          <Typography paragraph>
            Designed to work with React's component model. You define how to
            extract the values your component needs from Redux, and your
            component updates automatically as needed.
          </Typography>
          <Typography paragraph>
            Provides APIs that enable your components to interact with the Redux
            store, so you don't have to write that logic yourself.
          </Typography>
          <Typography paragraph>
            Automatically implements complex performance optimizations, so that
            your own component only re-renders when the data it needs has
            actually changed.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
