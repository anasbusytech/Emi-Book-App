export default function handler(req, res) {
  // Your cron job logic goes here
  res.status(200).send("Cron job executed successfully");
}
