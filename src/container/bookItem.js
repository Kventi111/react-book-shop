import { connect } from "react-redux"
import BookItem from '../components/bookItem'

const mapStateToProps = () => ({
  addCount : 0
})

export default connect(mapStateToProps)(BookItem)