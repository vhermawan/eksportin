import { all, takeEvery, takeLatest } from 'redux-saga/effects'

import * as actionTodo from '@/common/saga/todo/index'
import * as actionTypesTodo from '@/common/reducer/todo/actionTypes'

import * as actionTypeLogin from '@/common/reducer/login/actionTypes'
import * as actionLogin from '@/common/saga/login/index'

import * as actionTypeRegister from '@/common/reducer/register/actionTypes'
import * as actionRegister from '@/common/saga/register/index'

import * as actionTypeMaster from '@/common/reducer/master/actionTypes'
import * as actionMaster from '@/common/saga/master/index'

import * as actionTypeSlugPage from '@/common/reducer/slugPage/actionTypes'
import * as actionSlugPage from '@/common/saga/slugPage/index'

import * as actionTypeDetailPage from '@/common/reducer/detailPage/actionTypes'
import * as actionDetailPage from '@/common/saga/detailPage/index'

export default function* rootSagas() {
  yield all([
    // Content
    yield takeEvery(actionTypesTodo.EXAMPLE_COUNT, actionTodo.getTodos),
    yield takeLatest(actionTypeLogin.LOGIN_PROCESS, actionLogin.loginUser),
    yield takeLatest(actionTypeLogin.LOGOUT_PROCESS, actionLogin.logOutUser),
    yield takeLatest(
      actionTypeRegister.REGISTER_PROCESS,
      actionRegister.registerUser,
    ),
    yield takeLatest(
      actionTypeLogin.CHANGE_PROFILE_PROCESS,
      actionLogin.changeProfileUser,
    ),

    yield takeEvery(
      actionTypeMaster.GET_CATEGORY_NEWS_PROCESS,
      actionMaster.getCategoryNews,
    ),
    yield takeEvery(
      actionTypeMaster.GET_CATEGORY_UMKM_PROCESS,
      actionMaster.getCategoryUmkms,
    ),
    yield takeEvery(
      actionTypeMaster.GET_CATEGORY_BUYER_PROCESS,
      actionMaster.getCategoryBuyers,
    ),
    yield takeEvery(
      actionTypeMaster.GET_CATEGORY_STAKEHOLDER_PROCESS,
      actionMaster.getCategoryStakeholders,
    ),
    yield takeEvery(
      actionTypeMaster.GET_CATEGORY_COURSES_PROCESS,
      actionMaster.getCategoryCourses,
    ),

    /*set for slug page */
    yield takeLatest(
      actionTypeSlugPage.GET_SLUG_NEWS_PROCESS,
      actionSlugPage.setSlugNews,
    ),
    yield takeLatest(
      actionTypeSlugPage.GET_SLUG_BUYER_PROCESS,
      actionSlugPage.setSlugBuyer,
    ),
    yield takeLatest(
      actionTypeSlugPage.GET_SLUG_STAKEHOLDER_PROCESS,
      actionSlugPage.setSlugStakeholder,
    ),
    yield takeLatest(
      actionTypeSlugPage.GET_SLUG_COURSE_PROCESS,
      actionSlugPage.setSlugCourse,
    ),
    yield takeLatest(
      actionTypeSlugPage.GET_SLUG_UMKM_PROCESS,
      actionSlugPage.setSlugUmkm,
    ),

     /*get for detail page */
     yield takeEvery(
      actionTypeDetailPage.GET_DETAIL_NEWS_PROCESS,
      actionDetailPage.getDetailNews,
    ),
    yield takeLatest(
      actionTypeDetailPage.GET_DETAIL_BUYER_PROCESS,
      actionDetailPage.getDetailBuyer,
    ),
    yield takeLatest(
      actionTypeDetailPage.GET_DETAIL_STAKEHOLDER_PROCESS,
      actionDetailPage.getDetailStakeholder,
    ),
    yield takeLatest(
      actionTypeDetailPage.GET_DETAIL_COURSE_PROCESS,
      actionDetailPage.getDetailCourse,
    ),
    yield takeLatest(
      actionTypeDetailPage.GET_DETAIL_UMKM_PROCESS,
      actionDetailPage.getDetailUmkm,
    ),
  ])
}
