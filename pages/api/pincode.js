export default function handler(req, res) {
    let pincodes = {
      "400078":["Maharashtra","Mumbai"],
      "400079":["Delhi","delhi"]
    }
    res.status(200).json(pincodes)
  }
