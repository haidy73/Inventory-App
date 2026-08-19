const jwt = require('jsonwebtoken')
const Users = require('../models/user.model') // Matched user-model.js

const allowTo = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.role) {
            return res.status(500).json({ error: 'Role not found. ' })
        }

        if (!allowedRoles.includes(req.role)) {
            return res.status(403).json({ error: 'You do not have permission to perform this action.' })
        }

        next()
    }
}

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. ' })
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'JWTSECRETKEY')

    const loggedInUser = await Users.findById(decoded.id).select('-password')
    if (!loggedInUser) {
      return res.status(401).json({ error: 'User no longer exists.' })
    }

    req.user = loggedInUser
    req.role = loggedInUser.role

    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token. Please log in again.' })
  }
}

module.exports = {
    allowTo, 
    verifyToken
}