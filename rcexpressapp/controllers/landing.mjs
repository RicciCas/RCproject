// controllers/landing.mjs
export function get_landing(req, res, next){
    res.render('landing', { title: 'Express from Ricci Castillo with controllers' });
  }
export const submit_lead = (req, res, next) => {
console.log("lead_name from RC:", req.body.lead_name);
console.log("lead_email from RC:", req.body.lead_email);
res.redirect('/');
}
