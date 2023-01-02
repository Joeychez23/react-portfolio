function ValidateEmail(email) 
{
 if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(String(email.toLowerCase())))
  {
    return (true)
  }
    return (false)
}

export default ValidateEmail