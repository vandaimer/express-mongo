import { ResponseCode } from '../routes';


export default function invalidJSON(err, req, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      code: ResponseCode.INVALID_PAYLOAD,
      msg: "Invalid JSON",
      recors: [],
    });
  }
  next();
}
