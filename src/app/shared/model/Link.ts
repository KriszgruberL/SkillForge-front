export interface  Link {
  name : string;
  url : string;
  icon? : string;
  goto? : () => void;
  visible? : boolean;
}
