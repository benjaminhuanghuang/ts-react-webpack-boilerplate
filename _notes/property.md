


```
interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}


```


## Defaule property
```
Confirm.defaultProps = {
  cancelCaption: "Cancel",
  okCaption: "Okay"
};
```