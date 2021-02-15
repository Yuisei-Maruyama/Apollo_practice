import { mongoose } from '../app'

const Schema = mongoose.Schema

const movieSchema = new Schema({
  name: String,
  genre: String,
  // リレーションの追加
  directorId: String
})

module.exports = mongoose.model('Movie', movieSchema)
