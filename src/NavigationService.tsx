import React from 'react'
import { NavigationContainerRef, StackActions, ParamListBase } from '@react-navigation/native'

interface MutableRefObjec extends React.RefObject<NavigationContainerRef> {
  current: any
}

export const isMountedRef: MutableRefObjec = React.createRef<NavigationContainerRef>()

export const navigationRef: MutableRefObjec = React.createRef<NavigationContainerRef>()

export const navigate = (name: string, params: ParamListBase) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params)
  }
}

export const push = (name: string, params: ParamListBase) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params))
  }
}

export const goBack = () => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.goBack()
  }
}
