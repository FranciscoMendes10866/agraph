import monk from 'monk'

const db = monk('mongodb://root:root@localhost:27017/agraph?authSource=admin')

export const Users = db.get('users')
export const Posts = db.get('posts')
export const Comments = db.get('comments')
