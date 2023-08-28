import jwt from 'jsonwebtoken';

const secretKey = 'password';

const generateToken = (id) => {
  return jwt.sign({ id }, secretKey, {
    expiresIn: '3600s',
  });
};

export default generateToken;
