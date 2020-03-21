import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, TextField } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';

import Editor from 'tui-editor'; /* ES6 */
import 'tui-editor/dist/tui-editor.css'; // editor's ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor's content
import 'codemirror/lib/codemirror.css'; // codemirror
import 'highlight.js/styles/github.css'; // code block highlight
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  requireFont : {
    color:'red'
  }
}));

function createButton(iconClassName) {
  const button = document.createElement('button');

  button.className = 'custom-button';
  button.innerHTML = `<i class="${iconClassName}"></i>`;

  return button;
}

const AddClass = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    submitCheck:false
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(()=>{
    const instance = new Editor({
      el: document.querySelector('#editorSection'),
      initialEditType: 'markdown',
      height: '300px',
      toolbarItems: [
        'heading',
        'bold',
        'italic',
        'strike',
        'divider',
        'hr',
        'divider',
        'ul',
        'ol',
        'table',
        // Using Option: Customize the last button
        {
          type: 'button',
          options: {
            el: createButton('last'),
            name: 'Custom Button 1',
            tooltip: 'Custom Bold',
            command: 'Bold'
          }
        }
      ]
    });
  },[]);

  return (
    <div className={classes.root}>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan="4" align="center"><h2>* 수업 등록</h2><span className={classes.requireFont}>*5분마다 자동으로 임시저장 됩니다.</span></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center"><h2>수업명</h2><span className={classes.requireFont}>*필수 입력 값입니다</span></TableCell>
                  <TableCell colSpan="3" align="left"><TextField fullWidth variant="outlined" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><h2>수업 시작일</h2><span className={classes.requireFont}>*필수 입력 값입니다</span></TableCell>
                  <TableCell align="left"><TextField fullWidth variant="outlined" /></TableCell>
                  <TableCell align="center"><h2>수업 종료일</h2><span className={classes.requireFont}>*필수 입력 값입니다</span></TableCell>
                  <TableCell align="left"><TextField fullWidth variant="outlined" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><h2>강의계획서 등록</h2><br/>
                  <Button variant="contained" color="secondary">계획서 양식 다운로드</Button>
                  </TableCell>
                  <TableCell colSpan="3" align="left"><input type="file"/></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><h2>수업 타입</h2></TableCell>
                  <TableCell colSpan="3" align="left">
                    <RadioGroup row aria-label="position">
                      <FormControlLabel
                        value="전공"
                        control={<Radio color="primary" checked/>}
                        label="전공"
                      />
                      <FormControlLabel
                        value="교양"
                        control={<Radio color="primary" />}
                        label="교양"
                      />
                    </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><h2>수업 내용</h2></TableCell>
                  <TableCell colSpan="3" align="center">
                    <div id="editorSection"></div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><h2>댓글 사용 여부</h2></TableCell>
                  <TableCell colSpan="3" align="left">
                    <RadioGroup row aria-label="position">
                      <FormControlLabel
                        value="허용"
                        control={<Radio color="primary" checked/>}
                        label="허용"
                      />
                      <FormControlLabel
                        value="미허용"
                        control={<Radio color="primary" />}
                        label="미허용"
                      />
                    </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><h2>메뉴 종류</h2></TableCell>
                  <TableCell colSpan="3" align="left">
                    <FormGroup row>
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" disabled/>}
                        label="과 제"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        label="공지사항"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                        label="참고자료"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                        label="Q/A"
                      />
                    </FormGroup>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><h2>수업 개시 여부</h2></TableCell>
                  <TableCell colSpan="3" align="left">
                    <RadioGroup row aria-label="position">
                      <FormControlLabel
                        value="개시"
                        control={<Radio color="primary" checked/>}
                        label="개시"
                      />
                      <FormControlLabel
                        value="미개시"
                        control={<Radio color="primary" />}
                        label="미개시"
                      />
                    </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan="4" align="center">
                    <FormControlLabel
                      control={<Checkbox checked={state.submitCheck} onChange={handleChange} name="submitCheck" />}
                      label="입력한 대로 수업을 등록합니다."
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan="4" align="right">
                    <Button variant="contained" color="secondary" fullWidth style={{minHeight:50}}>
                      임시 저장
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan="4" align="right">
                    <Button variant="contained" color="primary" fullWidth style={{minHeight:70}}>
                      수업 등록
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    </div>
  );
};

export default AddClass;